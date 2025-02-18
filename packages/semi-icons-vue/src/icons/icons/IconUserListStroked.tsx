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
        d="M6.00003 8C6.00003 11.3 8.70003 14 12 14C15.3 14 18 11.3 18 8C18 4.7 15.3 2 12 2C8.70003 2 6.00003 4.7 6.00003 8ZM8.00003 8C8.00003 5.8 9.80003 4 12 4C14.2 4 16 5.8 16 8C16 10.2 14.2 12 12 12C9.80003 12 8.00003 10.2 8.00003 8ZM2.11696 20.5635C2.35145 20.0487 4.65137 15 12 15C12 15 13 15 13 16C13 17 12 17 12 17C5.80002 17 4.00002 21.2 4.00002 21.4C3.80002 21.9 3.20002 22.1 2.70002 21.9C2.10002 21.7 1.90002 21.1 2.10002 20.6C2.10333 20.5934 2.10891 20.5811 2.11691 20.5636L2.11696 20.5635ZM14 17.5C14 17.2239 14.2239 17 14.5 17H15.5C15.7762 17 16 17.2239 16 17.5V18.5C16 18.7761 15.7762 19 15.5 19H14.5C14.2239 19 14 18.7761 14 18.5V17.5ZM14.5 20C14.2239 20 14 20.2239 14 20.5V21.5C14 21.7761 14.2239 22 14.5 22H15.5C15.7762 22 16 21.7761 16 21.5V20.5C16 20.2239 15.7762 20 15.5 20H14.5ZM17 17.5C17 17.2239 17.2239 17 17.5 17H21.5C21.7762 17 22 17.2239 22 17.5V18.5C22 18.7761 21.7762 19 21.5 19H17.5C17.2239 19 17 18.7761 17 18.5V17.5ZM17.5 20C17.2239 20 17 20.2239 17 20.5V21.5C17 21.7761 17.2239 22 17.5 22H21.5C21.7762 22 22 21.7761 22 21.5V20.5C22 20.2239 21.7762 20 21.5 20H17.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUserListStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'user_list_stroked'} {...props}>
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
