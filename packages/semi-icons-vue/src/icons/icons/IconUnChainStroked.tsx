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
        d="M7.99951 2C8.5518 2 8.99951 2.44772 8.99951 3V6C8.99951 6.55228 8.5518 7 7.99951 7C7.44723 7 6.99951 6.55228 6.99951 6V3C6.99951 2.44772 7.44723 2 7.99951 2ZM14.1214 5.63612C15.2929 4.46455 17.1924 4.46455 18.364 5.63612C19.5356 6.80769 19.5356 8.70719 18.364 9.87876L16.2427 12.0001C15.8522 12.3906 15.8522 13.0238 16.2427 13.4143C16.6332 13.8048 17.2664 13.8048 17.6569 13.4143L19.7782 11.293C21.7308 9.34035 21.7308 6.17453 19.7782 4.22191C17.8256 2.26928 14.6598 2.26928 12.7071 4.22191L10.5858 6.34323C10.1953 6.73375 10.1953 7.36692 10.5858 7.75744C10.9763 8.14796 11.6095 8.14796 12 7.75744L14.1214 5.63612ZM9.87864 18.3639C8.70707 19.5355 6.80758 19.5355 5.636 18.3639C4.46443 17.1923 4.46443 15.2928 5.636 14.1212L7.75733 11.9999C8.14785 11.6094 8.14785 10.9762 7.75733 10.5857C7.3668 10.1952 6.73364 10.1952 6.34311 10.5857L4.22179 12.707C2.26917 14.6596 2.26917 17.8255 4.22179 19.7781C6.17441 21.7307 9.34024 21.7307 11.2929 19.7781L13.4142 17.6568C13.8047 17.2662 13.8047 16.6331 13.4142 16.2426C13.0237 15.852 12.3905 15.852 12 16.2426L9.87864 18.3639ZM15 21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18V21ZM2 8C2 7.44772 2.44772 7 3 7L6 7C6.55228 7 7 7.44771 7 8C7 8.55228 6.55228 9 6 9L3 9C2.44772 9 2 8.55228 2 8ZM20.9995 17C21.5518 17 21.9995 16.5523 21.9995 16C21.9995 15.4477 21.5518 15 20.9995 15H17.9995C17.4472 15 16.9995 15.4477 16.9995 16C16.9995 16.5523 17.4472 17 17.9995 17H20.9995Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconUnChainStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'un_chain_stroked'} {...props}>
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
