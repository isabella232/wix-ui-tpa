export const importExample = `import { Dialog } from 'wix-ui-tpa/Dialog';`;

const buildExample = (content: string) => `
class MobileExample extends React.Component {
  state = {
    isDialogOpen: false,
  };

  onOpenDialogButtonClick = () => this.setState({ isDialogOpen: true });

  onCloseDialog = () => this.setState({ isDialogOpen: false });

  render() {
    const { isDialogOpen } = this.state;
    
    return (
      ${content} 
    );
  }
}
`;

export const example = buildExample(`
    <>
        <Button upgrade onClick={this.onOpenDialogButtonClick}>Open Dialog</Button>
        <Dialog isOpen={isDialogOpen} onClose={this.onCloseDialog}>
            <div className="content" style={{ textAlign: 'center' }}>
                <Text typography="largeTitle">Are You Sure?</Text>
                <div class="text-container" style={{ marginTop: '24px', marginBottom: '36px' }}>
                    <Text typography="listText" tagName="div">
                        <div>Do you really want to delete the selected files?</div>
                        <div>Once removed, cannot be undone.</div>
                    </Text>
                </div>
                <Button
                    upgrade
                    priority={PRIORITY.basicSecondary}
                    style={{ marginLeft: '10px' }}
                >
                    SECONDARY
                </Button>
                <Button upgrade style={{ marginLeft: '10px' }}>
                    PRIMARY
                </Button>
             </div>
        </Dialog>
    </>
`);

export const mobileExample = buildExample(`
    <ExampleWithContextProps mobile={true}>
      <Button upgrade onClick={this.onOpenDialogButtonClick}>Open Dialog</Button>
      <Dialog isOpen={isDialogOpen} onClose={this.onCloseDialog} >
        <div className="content" style={{ textAlign: 'center' }}>
            <Text typography="MobileSmallTitleFont" tagName="div">Discard draft?</Text>
            <div class="text-container" style={{ marginTop: '16px', marginBottom: '32px' }}>
                <Text typography="MobileRunningTextFont" tagName="div">Are You Sure you want to discard the changes you made?</Text>
            </div>
            <Button
              upgrade
              priority={PRIORITY.basicSecondary}
              style={{ marginLeft: '10px', display: 'block' }}
            >
              SECONDARY
            </Button>
            </div>
            <Button upgrade style={{ marginLeft: '10px' }}>
              PRIMARY
            </Button>
      </Dialog>
    </ExampleWithContextProps>
`);
