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
        d="M2.43946 2.43934C1.85368 3.02513 1.85368 3.97487 2.43946 4.56066L6.8788 9H4.00012C3.1717 9 2.50012 9.67157 2.50012 10.5C2.50012 11.3284 3.1717 12 4.00012 12H10.5001C10.7035 12 10.8974 11.9595 11.0743 11.8862C11.2512 11.813 11.417 11.7045 11.5608 11.5607C11.7046 11.4168 11.8131 11.2511 11.8863 11.0742C11.9596 10.8973 12.0001 10.7034 12.0001 10.5V4C12.0001 3.17157 11.3285 2.5 10.5001 2.5C9.67169 2.5 9.00012 3.17157 9.00012 4V6.87868L4.56078 2.43934C3.97499 1.85355 3.02525 1.85355 2.43946 2.43934Z"
        fill="currentColor"
      />
      <path
        d="M20.0001 12C20.8285 12 21.5001 12.6716 21.5001 13.5C21.5001 14.3284 20.8285 15 20.0001 15H17.1215L21.5608 19.4394C22.1466 20.0251 22.1466 20.9749 21.5608 21.5607C20.9751 22.1465 20.0253 22.1465 19.4395 21.5607L15.0001 17.1213V20C15.0001 20.8284 14.3286 21.5 13.5001 21.5C12.6717 21.5 12.0001 20.8284 12.0001 20V13.5C12.0001 13.2723 12.0509 13.0564 12.1417 12.8631C12.1985 12.7419 12.2724 12.6267 12.3635 12.5212C12.4101 12.4671 12.4605 12.4163 12.5143 12.3694C12.6313 12.2672 12.7604 12.1862 12.8966 12.1264C13.0812 12.0451 13.2854 12 13.5001 12H20.0001Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconShrink',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'shrink'} {...props}>
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
