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
        d="M22.7249 11.31L14.6525 2.81134C14.0331 2.15917 12.9388 2.59979 12.9388 3.50137V7.50289C5.97773 7.50289 2 12 2 17.9961C2 18.4958 2.2413 20.1767 2.5558 20.3122C2.69275 20.3713 2.8436 20.298 2.99443 19.9949C5.21806 15.5256 7.46938 15.4977 12.9388 15.4977V20.4986C12.9388 21.4002 14.0331 21.8408 14.6525 21.1887L22.7249 12.69C23.0917 12.3039 23.0917 11.6961 22.7249 11.31Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconForward',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'forward'} {...props}>
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
