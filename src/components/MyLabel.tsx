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


}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {

    return (
        <span className={`label ${size} text-${color} ${fontColor}`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};