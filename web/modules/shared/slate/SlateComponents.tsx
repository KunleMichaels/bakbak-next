import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

export const SlateButton = React.forwardRef(
  ({ className, active, reversed, ...props }: any, ref: any) => (
    <span
      {...props}
      ref={ref}
      className={clsx(
        className,
        `
    span {
      cursor: pointer;
      color: ${
        reversed ? (active ? "white" : "#aaa") : active ? "black" : "#ccc"
      };
    }
  `
      )}
    />
  )
);

export const EditorValue = React.forwardRef(
  ({ className, value, ...props }: any, ref: any) => {
    const textLines = value.document.nodes
      .map((node: any) => node.text)
      .toArray()
      .join("\n");

    return (
      <div
        id="outerDiv"
        ref={ref}
        {...props}
        className={clsx(
          className,
          ` div {
            margin: 30px -20px 0;
          }`
        )}
      >
        <div
          className={clsx(
            ` div {
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          }`
          )}
        >
          Slate's value as text
        </div>
        <div
          className={clsx(
            `
          div {
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          }
        `
          )}
        >
          {textLines}
        </div>
      </div>
    );
  }
);
export const SlateIcon = React.forwardRef(
  ({ className, ...props }: any, ref: any) => (
    <span {...props} ref={ref} className={clsx("material-icons", className)}>
      <style jsx>{`
        span {
          font-size: 18px;
          vertical-align: text-bottom;
        }
      `}</style>
    </span>
  )
);
export const Instruction = React.forwardRef(
  ({ className, ...props }: any, ref: any) => (
    <div {...props} ref={ref} className={className}>
      <style jsx>{`
        div {
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        }
      `}</style>
    </div>
  )
);
export const SlateMenu = React.forwardRef(
  ({ className, ...props }: any, ref: any) => (
    <div {...props} ref={ref} className={className}>
      <style jsx>{`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `}</style>
    </div>
  )
);
export const SlatePortal = ({ children }: any) => {
  return ReactDOM.createPortal(children, document.body);
};
export const SlateToolbarStyled = React.forwardRef(
  ({ className, ...props }: any, ref: any) => (
    <SlateMenu {...props} ref={ref} className={className}>
      <style jsx>{`
        div {
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        }
      `}</style>
    </SlateMenu>
  )
);
