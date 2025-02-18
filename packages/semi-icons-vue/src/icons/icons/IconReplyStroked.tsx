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
        d="M3.87809 12L9.56123 17.9832V16.4977C9.56123 14.8442 10.9031 13.4923 12.5698 13.4992C14.8764 13.5088 17.0107 13.5616 18.8298 14.3492C19.2751 14.542 19.6877 14.7713 20.0729 15.0372C19.7211 13.9069 19.1619 12.929 18.4325 12.131C17.1337 10.7101 15.1572 9.70781 12.4328 9.5307C10.9189 9.43228 9.56123 8.19649 9.56123 6.50289V6.01676L3.87809 12ZM20.4788 18.2496C18.6693 15.7216 16.5442 15.5158 12.5614 15.4992C12.0092 15.4969 11.5612 15.9455 11.5612 16.4977V20.4986C11.5612 21.4002 10.4669 21.8408 9.84747 21.1887L1.7751 12.69C1.4083 12.3039 1.4083 11.6961 1.7751 11.31L9.84747 2.81134C10.4669 2.15917 11.5612 2.59979 11.5612 3.50137V6.50289C11.5612 7.05518 12.0115 7.49909 12.5626 7.53491C18.7804 7.93914 22.3605 12.1279 22.496 17.6684C22.4987 17.7771 22.5 17.8864 22.5 17.9961C22.5 18.1004 22.4895 18.2562 22.47 18.4386C22.4323 18.7911 22.3611 19.2431 22.2674 19.6158C22.1772 19.9744 22.0662 20.2596 21.9442 20.3122C21.8072 20.3713 21.6564 20.298 21.5056 19.9949C21.2645 19.5103 21.0231 19.078 20.7773 18.6922C20.6786 18.5373 20.5792 18.3899 20.4788 18.2496Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconReplyStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'reply_stroked'} {...props}>
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
