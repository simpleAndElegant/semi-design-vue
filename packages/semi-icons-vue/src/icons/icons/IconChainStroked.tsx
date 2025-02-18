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
        d="M18.364 5.636C17.1924 4.46443 15.2929 4.46443 14.1214 5.636L12 7.75732C11.6095 8.14785 10.9763 8.14785 10.5858 7.75732C10.1953 7.3668 10.1953 6.73363 10.5858 6.34311L12.7071 4.22179C14.6598 2.26917 17.8256 2.26917 19.7782 4.22179C21.7308 6.17441 21.7308 9.34024 19.7782 11.2929L17.6569 13.4142C17.2664 13.8047 16.6332 13.8047 16.2427 13.4142C15.8522 13.0237 15.8522 12.3905 16.2427 12L18.364 9.87864C19.5356 8.70707 19.5356 6.80758 18.364 5.636ZM5.636 18.3638C6.80758 19.5353 8.70707 19.5353 9.87864 18.3638L12 16.2424C12.3905 15.8519 13.0237 15.8519 13.4142 16.2424C13.8047 16.633 13.8047 17.2661 13.4142 17.6567L11.2929 19.778C9.34024 21.7306 6.17441 21.7306 4.22179 19.778C2.26917 17.8254 2.26917 14.6595 4.22179 12.7069L6.34311 10.5856C6.73364 10.1951 7.3668 10.1951 7.75732 10.5856C8.14785 10.9761 8.14785 11.6093 7.75732 11.9998L5.636 14.1211C4.46443 15.2927 4.46443 17.1922 5.636 18.3638ZM15.5357 9.87838C15.9262 9.48785 15.9262 8.85469 15.5357 8.46416C15.1452 8.07364 14.512 8.07364 14.1215 8.46416L8.46465 14.121C8.07413 14.5115 8.07413 15.1447 8.46465 15.5352C8.85518 15.9258 9.48834 15.9258 9.87887 15.5352L15.5357 9.87838Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconChainStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'chain_stroked'} {...props}>
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
