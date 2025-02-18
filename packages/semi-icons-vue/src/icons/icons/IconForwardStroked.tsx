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
        d="M20.1219 12L14.4388 17.9832V16.4977C14.4388 14.8442 13.0969 13.4923 11.4302 13.4992C9.12364 13.5088 6.98933 13.5616 5.17023 14.3492C4.7249 14.542 4.31231 14.7713 3.92712 15.0372C4.27892 13.9069 4.83812 12.929 5.56751 12.131C6.86633 10.7101 8.84283 9.70781 11.5672 9.5307C13.0811 9.43228 14.4388 8.19649 14.4388 6.50289V6.01676L20.1219 12ZM3.52124 18.2496C5.33072 15.7216 7.45583 15.5158 11.4386 15.4992C11.9908 15.4969 12.4388 15.9455 12.4388 16.4977V20.4986C12.4388 21.4002 13.5331 21.8408 14.1525 21.1887L22.2249 12.69C22.5917 12.3039 22.5917 11.6961 22.2249 11.31L14.1525 2.81134C13.5331 2.15917 12.4388 2.59979 12.4388 3.50137V6.50289C12.4388 7.05518 11.9885 7.49909 11.4374 7.53491C5.21959 7.93914 1.63949 12.1279 1.50399 17.6684C1.50134 17.7771 1.5 17.8864 1.5 17.9961C1.5 18.1004 1.51052 18.2562 1.53001 18.4386C1.56768 18.7911 1.63889 19.2431 1.7326 19.6158C1.82277 19.9744 1.93377 20.2596 2.0558 20.3122C2.19275 20.3713 2.3436 20.298 2.49443 19.9949C2.73551 19.5103 2.97692 19.078 3.22271 18.6922C3.32143 18.5373 3.42085 18.3899 3.52124 18.2496Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconForwardStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'forward_stroked'} {...props}>
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
