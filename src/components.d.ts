/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CssSideDrawer {
        /**
          * Title from SideDrawer
          * @type {string}
         */
        "myTitle": string;
        "open": () => Promise<void>;
        /**
          * Open SideDrawer
          * @type {boolean}
         */
        "opened": boolean;
    }
    interface CssSpinner {
    }
    interface CssStockFinder {
    }
    interface CssStockPrice {
        "stockSymbol": string;
    }
    interface CustomTooltip {
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCssSideDrawerElement extends Components.CssSideDrawer, HTMLStencilElement {
    }
    var HTMLCssSideDrawerElement: {
        prototype: HTMLCssSideDrawerElement;
        new (): HTMLCssSideDrawerElement;
    };
    interface HTMLCssSpinnerElement extends Components.CssSpinner, HTMLStencilElement {
    }
    var HTMLCssSpinnerElement: {
        prototype: HTMLCssSpinnerElement;
        new (): HTMLCssSpinnerElement;
    };
    interface HTMLCssStockFinderElement extends Components.CssStockFinder, HTMLStencilElement {
    }
    var HTMLCssStockFinderElement: {
        prototype: HTMLCssStockFinderElement;
        new (): HTMLCssStockFinderElement;
    };
    interface HTMLCssStockPriceElement extends Components.CssStockPrice, HTMLStencilElement {
    }
    var HTMLCssStockPriceElement: {
        prototype: HTMLCssStockPriceElement;
        new (): HTMLCssStockPriceElement;
    };
    interface HTMLCustomTooltipElement extends Components.CustomTooltip, HTMLStencilElement {
    }
    var HTMLCustomTooltipElement: {
        prototype: HTMLCustomTooltipElement;
        new (): HTMLCustomTooltipElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "css-side-drawer": HTMLCssSideDrawerElement;
        "css-spinner": HTMLCssSpinnerElement;
        "css-stock-finder": HTMLCssStockFinderElement;
        "css-stock-price": HTMLCssStockPriceElement;
        "custom-tooltip": HTMLCustomTooltipElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CssSideDrawer {
        /**
          * Title from SideDrawer
          * @type {string}
         */
        "myTitle"?: string;
        /**
          * Open SideDrawer
          * @type {boolean}
         */
        "opened"?: boolean;
    }
    interface CssSpinner {
    }
    interface CssStockFinder {
        "onCssSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface CssStockPrice {
        "stockSymbol"?: string;
    }
    interface CustomTooltip {
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "css-side-drawer": CssSideDrawer;
        "css-spinner": CssSpinner;
        "css-stock-finder": CssStockFinder;
        "css-stock-price": CssStockPrice;
        "custom-tooltip": CustomTooltip;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "css-side-drawer": LocalJSX.CssSideDrawer & JSXBase.HTMLAttributes<HTMLCssSideDrawerElement>;
            "css-spinner": LocalJSX.CssSpinner & JSXBase.HTMLAttributes<HTMLCssSpinnerElement>;
            "css-stock-finder": LocalJSX.CssStockFinder & JSXBase.HTMLAttributes<HTMLCssStockFinderElement>;
            "css-stock-price": LocalJSX.CssStockPrice & JSXBase.HTMLAttributes<HTMLCssStockPriceElement>;
            "custom-tooltip": LocalJSX.CustomTooltip & JSXBase.HTMLAttributes<HTMLCustomTooltipElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}