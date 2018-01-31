## TpaToggleSwitch
An implementation of a ToggleSwitch for TPAs,
The base implementation can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=StylableToggleSwitchStory).
The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

By default the Toggle will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| MainColor  | string   | Palette color-8 | The main color of the toggle, all other colors are driven by it |
| Selected   | string   | MainColor       | The color of the toggle when it is on |
| Hover      | string   | MainColor with 70% opacity | The color of the toggle background when hovered |
| Muted      | string   | MainColor with 30% opacity | The color of the toggle background when not selected |
| Disabled   | string   | Palette color-1 with 30% opacity | The color of the toggle when disabled |
Full list of supported props can be found [here](https://wix.github.io/wix-ui/?selectedKind=Components&selectedStory=StylableToggleSwitchStory)


In order to override the theme, use Wix Styleable extends capabilities and wrap with withStylable HOC:

1. create an styleable file (e.g. ToggleSwitchExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/ToggleSwitch/ToggleSwitch.st.css";
        -st-default: ToggleSwitch;
    }

    //once mixin is pulled, you can override theme props as follows
    .root {
        --runtimeSettings1: <some default value for a settings key>;
        -st-extends: ToggleSwitch;
        -st-mixin: ToggleSwitch(
                MainColor '"color(--runtimeSettings1)"',
                innerLabelWidth 21px
                //more overriders
        );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import toggleSwitchStylesExt from './ToggleSwitchExt.st.css';
    import {withStylable} from 'wix-ui-core/dist/src';

    const TpaToggleSwitchExt = withStylable<ToggleSwitchProps>(TpaToggleSwitch, toggleSwitchStylesExt, () => null);
    ```