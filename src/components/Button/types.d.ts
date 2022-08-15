export type ButtonProps = {
  title: string;
  buttonType?: 'solid' | 'outline';
  size?: 'large' | 'small';
  withIcon?: boolean;
  iconName?: string;
  width?: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset';
  containerStyles?: string;
  titleStyles?: string;
};
