import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

export interface iconOptions {
  color: string;
  icon: string;
  iconFolder: string;
  imgFormat: string;
  imgClass: string;
  height: string;
  width: string;
};

@Component({
  selector: 'gor-letterhead-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './print.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadHeaderComponent {

  public _isPrinting: boolean;
  /**
   * Indicates whether to render the version for display
   *  on screen or the version for printing.
   */
  @Input() set isPrinting(isPrinting: boolean) {
    this._isPrinting = isPrinting;
  }

  /**
   * List of icons to be displayed above page header.
   */
  public _iconList: iconOptions[] | string[] = [];
  public isIconString = true;
  @Input() public set iconList(iconList: iconOptions[] | string[]) {
    this.isIconString = typeof iconList[0] === 'string';
    this._iconList = iconList;
  }

  public _rightMain = '';
  public _rightMainWithLabel = { label: '', value: '' };
  public displayDefaultTemplate = true;
  /**
   * The main header of the page. Can be a simple string or
   * and object containing a label and a value.
   */
  @Input() public set rightMain (value) {
    this.displayDefaultTemplate = typeof(value) === 'string';
    if (this.displayDefaultTemplate) {
      this._rightMain = value;
    } else {
      this._rightMainWithLabel = value;
    }
  };

  /**
   * The subheader of the page.
   */
  @Input() public rightSub: string;

  /**
   * Identifies page in DOM.
   */
  @HostBinding('id') @Input() public headerId: string;

  /**
   * The name of the icon clicked.
   */
  @Output() public iconClick = new EventEmitter<string>();

  /**
   * Emits a string containing the name of the icon clicked.
   * @param iconName the name of the icon clicked
   */
  public onSelectIcon(iconName: any) {
    this.iconClick.emit(iconName);
  }
}
