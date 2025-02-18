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
        d="M3.5 2.5C4.32843 2.5 5 3.17157 5 4V10.5H11V4C11 3.17157 11.6716 2.5 12.5 2.5C13.3284 2.5 14 3.17157 14 4V20C14 20.8284 13.3284 21.5 12.5 21.5C11.6716 21.5 11 20.8284 11 20V13.5H5V20C5 20.8284 4.32843 21.5 3.5 21.5C2.67157 21.5 2 20.8284 2 20V4C2 3.17157 2.67157 2.5 3.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M19.7051 14.7451C19.7051 15.3877 19.2607 15.8662 18.6729 15.8662C18.085 15.8662 17.6543 15.3877 17.6543 14.7383C17.6543 14.0957 18.0781 13.6309 18.666 13.6309C19.2607 13.6309 19.7051 14.1094 19.7051 14.7451ZM15.2754 19.4004C15.2754 19.9199 15.624 20.3711 16.1914 20.6924C16.7588 21.0137 17.5381 21.2051 18.4062 21.2051C21.0996 21.2051 22.6855 19.4209 22.6855 16.3311C22.6855 13.3438 21.1543 11.5117 18.6592 11.5117C16.4717 11.5117 14.9951 12.8584 14.9951 14.8545C14.9951 16.6182 16.1709 17.8555 17.8457 17.8555C18.8027 17.8555 19.6436 17.3496 19.9785 16.5703H20.04C20.04 18.1357 19.459 19.0586 18.4131 19.0586C17.8525 19.0586 17.5312 18.874 17.1416 18.6279C16.8271 18.4297 16.6016 18.3682 16.3145 18.3682C15.7402 18.3682 15.2754 18.7852 15.2754 19.4004Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconH9',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'h9'} {...props}>
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
