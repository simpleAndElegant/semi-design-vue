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
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.79289 7.29289C9.18342 6.90237 9.81658 6.90237 10.2071 7.29289L12 9.08579L13.7929 7.29289C14.1834 6.90237 14.8166 6.90237 15.2071 7.29289C15.5976 7.68342 15.5976 8.31658 15.2071 8.70711L13.9142 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H13V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V15H9C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V12H9C8.44772 12 8 11.5523 8 11C8 10.4477 8.44772 10 9 10H10.0858L8.79289 8.70711C8.40237 8.31658 8.40237 7.68342 8.79289 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCoinMoneyStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'coin_money_stroked'} {...props}>
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
