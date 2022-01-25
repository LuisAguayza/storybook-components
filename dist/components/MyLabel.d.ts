/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
    * This is  the message will show in the label
    */
    label: string;
    /**
    * Normal size is the defect value
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capital letters
    */
    allCaps?: boolean;
    /**
    * text color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * custom text color
    */
    fontColor?: string;
    /**
    * custom background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
