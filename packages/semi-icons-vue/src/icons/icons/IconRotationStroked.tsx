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
        d="M19 1.5C19.5523 1.5 20 1.94772 20 2.5V7.5H15C14.4477 7.5 14 7.05228 14 6.5C14 5.94772 14.4477 5.5 15 5.5H16.6037C13.4931 3.40559 9.23646 3.73401 6.48521 6.48526C3.6 9.37047 3.37929 13.9112 5.82309 17.0497C6.1624 17.4854 6.16862 18.1156 5.7781 18.5061C5.38757 18.8966 4.74978 18.8994 4.39969 18.4723C1.18029 14.5442 1.40406 8.73798 5.07099 5.07105C8.59363 1.54841 14.0905 1.20329 18 4.03568V2.5C18 1.94772 18.4477 1.5 19 1.5ZM8 21C8.55228 21 9 20.5523 9 20C9 19.4477 8.55228 19 8 19C7.44771 19 7 19.4477 7 20C7 20.5523 7.44771 21 8 21ZM13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21ZM16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21ZM20.5 17.5C20.5 18.0523 20.0523 18.5 19.5 18.5C18.9477 18.5 18.5 18.0523 18.5 17.5C18.5 16.9477 18.9477 16.5 19.5 16.5C20.0523 16.5 20.5 16.9477 20.5 17.5ZM21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13C20 13.5523 20.4477 14 21 14Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconRotationStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'rotation_stroked'} {...props}>
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
