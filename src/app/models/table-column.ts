export namespace Table {
  export interface Column {
    /**
     * width in grid fr value, 0.1 0.2 ... allowed
     */
    width?: number;
    valueStyle?: {};
    valueClass?: {};

    /**
     * min width in pixel
     * default 30
     */
    minWidth?: number;

    /**
     * if true text will display an ellipsis when it doesn't fit
     * by default - false
     */
    wrapText?: boolean;
  }

  export interface Columns {
    [key: string]: Column;
  }
}

