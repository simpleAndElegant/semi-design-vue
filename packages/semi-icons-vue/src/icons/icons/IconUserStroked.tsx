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
        d="M12 14C8.7 14 6 11.3 6 8C6 4.7 8.7 2 12 2C15.3 2 18 4.7 18 8C18 11.3 15.3 14 12 14ZM12 4C9.8 4 8 5.8 8 8C8 10.2 9.8 12 12 12C14.2 12 16 10.2 16 8C16 5.8 14.2 4 12 4Z"
        fill="currentColor"
      />
      <path
        d="M21.9 20.6C21.8 20.4 19.6 15 12 15C4.40002 15 2.20002 20.4 2.10002 20.6C1.90002 21.1 2.10002 21.7 2.70002 21.9C3.20002 22.1 3.80002 21.9 4.00002 21.4C4.00002 21.2 5.80002 17 12 17C18.2 17 20 21.2 20.1 21.4C20.3 21.9 20.9 22.2 21.4 21.9C21.9 21.7 22.1 21.1 21.9 20.6Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_stroked'} {...props}>
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
