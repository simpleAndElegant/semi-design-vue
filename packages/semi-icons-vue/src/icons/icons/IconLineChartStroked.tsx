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
        d="M2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3V20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3ZM20.3823 6.4706C20.6422 5.98329 20.4578 5.37756 19.9705 5.11766C19.4832 4.85776 18.8775 5.04212 18.6176 5.52943L15.1064 12.1128L10.0038 9.13624C9.52674 8.85795 8.91442 9.01909 8.63614 9.49614L5.13614 15.4961C4.85786 15.9732 5.019 16.5855 5.49605 16.8638C5.9731 17.1421 6.58542 16.9809 6.8637 16.5039L9.85983 11.3677L14.996 14.3638C15.2308 14.5008 15.5113 14.5362 15.7728 14.4621C16.0343 14.3879 16.2544 14.2104 16.3823 13.9706L20.3823 6.4706Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconLineChartStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'line_chart_stroked'} {...props}>
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
