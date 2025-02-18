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
        d="M18.9997 3L6.99811 3C5.89388 3 5.00009 3.89388 5.00008 4.99872L5.00006 17.1707C5.31282 17.0601 5.64939 17 6 17H19.0001L18.9997 3ZM6 21C5.44772 21 5 20.5523 5 20L5.00006 19.9889C5.00603 19.4417 5.45144 19 6 19H19V21H6ZM3.00008 4.9987L3.00006 19.9807L3 20C3 21.6568 4.34314 23 6 23H20C20.5523 23 21 22.5523 21 22V18L21.0001 3C21.0001 1.89497 20.1038 1 18.9997 1L6.99811 1C4.78871 1 3.0001 2.78991 3.00008 4.9987ZM7.25 8.5C7.25 8.22386 7.47386 8 7.75 8H8.25C8.52614 8 8.75 8.22386 8.75 8.5V9.75C8.75 10.0261 8.97386 10.25 9.25 10.25H9.75C10.0261 10.25 10.25 10.0261 10.25 9.75V8.5C10.25 8.22386 10.4739 8 10.75 8H11.25C11.5261 8 11.75 8.22386 11.75 8.5V13.5C11.75 13.7761 11.5261 14 11.25 14H10.75C10.4739 14 10.25 13.7761 10.25 13.5V12.25C10.25 11.9739 10.0261 11.75 9.75 11.75H9.25C8.97386 11.75 8.75 11.9739 8.75 12.25V13.5C8.75 13.7761 8.52614 14 8.25 14H7.75C7.47386 14 7.25 13.7761 7.25 13.5V8.5ZM13 9.5V10.25V11V11.25C13 11.5261 13.2239 11.75 13.5 11.75H15.125C15.3321 11.75 15.5 11.9179 15.5 12.125C15.5 12.3321 15.3321 12.5 15.125 12.5H13.5C13.2239 12.5 13 12.7239 13 13V13.5C13 13.7761 13.2239 14 13.5 14H15.5H16.5C16.7761 14 17 13.7761 17 13.5V12.5V11.75V11V10.75C17 10.4739 16.7761 10.25 16.5 10.25H14.875C14.6679 10.25 14.5 10.0821 14.5 9.875C14.5 9.66789 14.6679 9.5 14.875 9.5H16.5C16.7761 9.5 17 9.27614 17 9V8.5C17 8.22386 16.7761 8 16.5 8H14.5H13.5C13.2239 8 13 8.22386 13 8.5V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBookH5Stroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'book_h5_stroked'} {...props}>
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
