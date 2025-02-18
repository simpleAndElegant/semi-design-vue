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
      <rect x={5} y={9} width={18} height={14} rx={3} fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.659 0.747655L2.46269 4.22036C0.836568 4.64829 -0.120338 6.32896 0.3416 7.94575L2.69291 16.1753C2.76592 16.4309 2.87002 16.6693 2.99997 16.8876V11C2.99997 8.79088 4.79083 7.00002 6.99997 7.00002H20.5L19.307 2.82472C18.8586 1.25519 17.2376 0.332237 15.659 0.747655Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconGallery',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'gallery'} {...props}>
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
