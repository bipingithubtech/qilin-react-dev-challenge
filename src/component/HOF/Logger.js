import React, { useEffect } from "react";

const Logger = (WrappedComponent) => {
  const WithLogger = (props) => {
    console.log(`Rendering ${WrappedComponent.name}`);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);

      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, []); // Empty dependency array for mounting and unmounting

    useEffect(() => {
      // Skip the effect on initial render
      if (props.count) {
        console.log(
          `Component ${WrappedComponent.name} is updated. Count: ${props.count}`
        );
      }
    }, [props.count]);

    return <WrappedComponent {...props} />;
  };
  return WithLogger;
};

export default Logger;
