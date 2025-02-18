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
        d="M4 1C3.44772 1 3 1.44772 3 2C3 2.55228 3.44772 3 4 3H5V8C5 8.26522 5.10536 8.51957 5.29289 8.70711L8.58579 12L5.29289 15.2929C5.10536 15.4804 5 15.7348 5 16V21H4C3.44772 21 3 21.4477 3 22C3 22.5523 3.44772 23 4 23H20C20.5523 23 21 22.5523 21 22C21 21.4477 20.5523 21 20 21H19V16C19 15.7348 18.8946 15.4804 18.7071 15.2929L15.4142 12L18.7071 8.70711C18.8946 8.51957 19 8.26522 19 8V3H20C20.5523 3 21 2.55228 21 2C21 1.44772 20.5523 1 20 1H18H6H4ZM13.2929 11.2929L17 7.58579V3H7V7.58579L10.7071 11.2929C11.0976 11.6834 11.0976 12.3166 10.7071 12.7071L7 16.4142V21H17V16.4142L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929ZM9 7C9 6.44772 9.44772 6 10 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7ZM9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H9Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconHourglassStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'hourglass_stroked'} {...props}>
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
