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
        d="M2.2751 11.31L10.3475 2.81134C10.9669 2.15917 12.0612 2.59979 12.0612 3.50137V7.50289C19.0223 7.50289 23 12 23 17.9961C23 18.4958 22.7587 20.1767 22.4442 20.3122C22.3072 20.3713 22.1564 20.298 22.0056 19.9949C19.7819 15.5256 17.5306 15.4977 12.0612 15.4977V20.4986C12.0612 21.4002 10.9669 21.8408 10.3475 21.1887L2.2751 12.69C1.9083 12.3039 1.9083 11.6961 2.2751 11.31Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconReply',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'reply'} {...props}>
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
