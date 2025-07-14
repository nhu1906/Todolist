import { OverlayActivityIndicator } from "@bosch/react-frok";
import React from "react";
import Styles from "./LoaderIndicator.module.scss";

interface LoaderIndicatorProps {
  size?: "medium" | "large" | "small";
  placeholder?: string;
}
export const LoaderIndicator: React.FC<LoaderIndicatorProps> = ({
  size = "medium",
  placeholder,
}) => {
  return (
    <div className={Styles["indicator-wrapper"]}>
      <OverlayActivityIndicator
        size={size}
        placeholder={placeholder}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />
    </div>
  );
};
