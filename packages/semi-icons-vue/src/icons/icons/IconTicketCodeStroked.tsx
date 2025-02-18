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
        d="M2 4C1.44772 4 1 4.44772 1 5V9.79944C1 10.2576 1.3081 10.6438 1.72842 10.7621C2.45404 10.9884 2.81818 11.5252 2.81818 12C2.81818 12.4787 2.44806 13.0203 1.71055 13.2434C1.28862 13.371 1 13.7598 1 14.2006V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V14.2006C23 13.7598 22.7114 13.371 22.2895 13.2434C21.5519 13.0203 21.1818 12.4787 21.1818 12C21.1818 11.5213 21.5519 10.9797 22.2895 10.7566C22.7114 10.629 23 10.2402 23 9.79944V5C23 4.44772 22.5523 4 22 4H2ZM3 9.13633V6H21V9.13633C19.9571 9.69429 19.1818 10.7235 19.1818 12C19.1818 13.2765 19.9571 14.3057 21 14.8637V18H3V14.8637C4.0429 14.3057 4.81818 13.2765 4.81818 12C4.81818 10.7235 4.0429 9.69429 3 9.13633ZM8 9C7.44772 9 7 9.44772 7 10V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V10C9 9.44772 8.55228 9 8 9ZM11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10ZM16 9C15.4477 9 15 9.44772 15 10V14C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14V10C17 9.44772 16.5523 9 16 9Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTicketCodeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'ticket_code_stroked'} {...props}>
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
