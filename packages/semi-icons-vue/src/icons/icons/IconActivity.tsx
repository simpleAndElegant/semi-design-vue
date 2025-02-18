import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9999 1C11.1715 1 10.4999 1.67157 10.4999 2.5C10.4999 3.32843 11.1715 4 11.9999 4C16.4182 4 19.9999 7.58172 19.9999 12C19.9999 16.4183 16.4182 20 11.9999 20C10.2181 20 8.57637 19.4193 7.24767 18.4363C6.58168 17.9436 5.64238 18.0841 5.14969 18.7501C4.65699 19.4161 4.79747 20.3554 5.46346 20.8481C7.29098 22.2001 9.5542 23 11.9999 23C18.075 23 22.9999 18.0751 22.9999 12C22.9999 5.92487 18.075 1 11.9999 1ZM7.5 5.2C8.32843 5.2 9 4.52843 9 3.7C9 2.87157 8.32843 2.2 7.5 2.2C6.67157 2.2 6 2.87157 6 3.7C6 4.52843 6.67157 5.2 7.5 5.2ZM5.5 7C5.5 7.82843 4.82843 8.5 4 8.5C3.17157 8.5 2.5 7.82843 2.5 7C2.5 6.17157 3.17157 5.5 4 5.5C4.82843 5.5 5.5 6.17157 5.5 7ZM2.5 13C3.32843 13 4 12.3284 4 11.5C4 10.6716 3.32843 10 2.5 10C1.67157 10 1 10.6716 1 11.5C1 12.3284 1.67157 13 2.5 13ZM5 16.5C5 17.3284 4.32843 18 3.5 18C2.67157 18 2 17.3284 2 16.5C2 15.6716 2.67157 15 3.5 15C4.32843 15 5 15.6716 5 16.5ZM13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5V12C10.5 12.3978 10.658 12.7794 10.9393 13.0607L13.9393 16.0607C14.5251 16.6464 15.4749 16.6464 16.0607 16.0607C16.6464 15.4749 16.6464 14.5251 16.0607 13.9393L13.5 11.3787V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconActivity',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'activity'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
