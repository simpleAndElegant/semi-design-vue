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
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.5523 23 13 22.5523 13 22C13 21.4477 12.5523 21 12 21C7.02944 21 3 16.9706 3 12ZM8.16789 6.79289C8.55842 6.40237 9.19158 6.40237 9.58211 6.79289L12 9.21079L14.4179 6.79289C14.8084 6.40237 15.4416 6.40237 15.8321 6.79289C16.2226 7.18342 16.2226 7.81658 15.8321 8.20711L13.5392 10.5H15.75C16.3023 10.5 16.75 10.9477 16.75 11.5C16.75 12.0523 16.3023 12.5 15.75 12.5H13V13.5H15.75C16.3023 13.5 16.75 13.9477 16.75 14.5C16.75 15.0523 16.3023 15.5 15.75 15.5H13V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V15.5H8.25C7.69772 15.5 7.25 15.0523 7.25 14.5C7.25 13.9477 7.69772 13.5 8.25 13.5H11V12.5H8.25C7.69772 12.5 7.25 12.0523 7.25 11.5C7.25 10.9477 7.69772 10.5 8.25 10.5H10.4608L8.16789 8.20711C7.77737 7.81658 7.77737 7.18342 8.16789 6.79289ZM19.9697 15.7197C20.2626 15.4268 20.7374 15.4268 21.0303 15.7197L22.5303 17.2197C22.7448 17.4342 22.809 17.7568 22.6929 18.037C22.5768 18.3173 22.3033 18.5 22 18.5H16C15.5858 18.5 15.25 18.1642 15.25 17.75C15.25 17.3358 15.5858 17 16 17H20.1893L19.9697 16.7803C19.6768 16.4874 19.6768 16.0126 19.9697 15.7197ZM16.9697 22.7803C17.2626 23.0732 17.7374 23.0732 18.0303 22.7803C18.3232 22.4874 18.3232 22.0126 18.0303 21.7197L17.8107 21.5H22C22.4142 21.5 22.75 21.1642 22.75 20.75C22.75 20.3358 22.4142 20 22 20H16C15.6967 20 15.4232 20.1827 15.3071 20.463C15.191 20.7432 15.2552 21.0658 15.4697 21.2803L16.9697 22.7803Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMoneyExchangeStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'money_exchange_stroked'} {...props}>
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
