import { OnChanges, OnInit, OnDestroy, SimpleChange, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IObservableCollection, IGridDataRow, ISlickColumn } from './interfaces';
export declare function getOverridableTextEditorClass(grid: SlickGrid): any;
export declare class SlickGrid implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private _el;
    columnDefinitions: ISlickColumn<any>[];
    dataRows: IObservableCollection<IGridDataRow>;
    resized: Observable<any>;
    highlightedCells: {
        row: number;
        column: number;
    }[];
    blurredColumns: string[];
    contextColumns: string[];
    columnsLoading: string[];
    showHeader: boolean;
    enableColumnReorder: boolean;
    enableAsyncPostRender: boolean;
    selectionModel: string | Slick.SelectionModel<any, any>;
    plugins: Array<string | Slick.Plugin<any>>;
    enableEditing: boolean;
    topRowNumber: number;
    overrideCellFn: (rowNumber, columnId, value?, data?) => string;
    isCellEditValid: (row: number, column: number, newValue: any) => boolean;
    loadFinished: EventEmitter<void>;
    editingFinished: EventEmitter<any>;
    contextMenu: EventEmitter<any>;
    topRowNumberChange: EventEmitter<number>;
    activeCellChanged: EventEmitter<{
        row: number;
        column: number;
    }>;
    cellEditBegin: EventEmitter<{
        row: number;
        column: number;
    }>;
    cellEditExit: EventEmitter<{
        row: number;
        column: number;
        newValue: any;
    }>;
    rowEditBegin: EventEmitter<{
        row: number;
    }>;
    rowEditExit: EventEmitter<{
        row: number;
    }>;
    onFocus(): void;
    rowHeight: number;
    private _rowHeight;
    private _grid;
    private _gridColumns;
    private _columnNameToIndex;
    private _gridData;
    private _resizeSubscription;
    private _gridSyncSubscription;
    private _topRow;
    private _activeEditingRow;
    private _activeEditingRowHasChanges;
    constructor(_el: any);
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    enterEditSession(): void;
    endEditSession(): void;
    readonly onSelectedRowsChanged: Slick.Event<Slick.OnSelectedRowsChangedEventArgs<any>>;
    getSelectedRows(): number[];
    getColumnIndex(name: string): number;
    getSelectedRanges(): Slick.Range[];
    registerPlugin(plugin: Slick.Plugin<any> | string): void;
    setActive(): void;
    selection: Slick.Range[] | boolean;
    subscribeToContextMenu(): void;
    private initGrid();
    private changeEditSession(enabled);
    private handleEditorCellChange(rowNumber);
    private static getDataWithSchema(data, columns);
    private onResize();
    private invalidateRange(start, end);
    private getColumnEditor(column);
    private getFormatter;
    private subscribeToScroll();
    private subscribeToCellChanged();
    private subscribeToBeforeEditCell();
    private subscribeToActiveCellChanged();
    private updateSchema();
    private setCallbackOnDataRowsChanged();
    private renderGridDataRowsRange(startIndex, count);
}