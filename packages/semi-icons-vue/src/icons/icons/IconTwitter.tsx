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
        d="M19.633 7.99701C19.646 8.17201 19.646 8.34601 19.646 8.52001C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.856 18.222 6.589 17.586 7.974 16.501C6.203 16.464 4.719 15.304 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C4.182 13.259 2.799 11.638 2.799 9.68001V9.63001C3.336 9.92901 3.959 10.116 4.619 10.141C3.534 9.41901 2.823 8.18401 2.823 6.78701C2.823 6.03901 3.022 5.35301 3.371 4.75501C5.354 7.19801 8.335 8.79501 11.677 8.97001C11.615 8.67001 11.577 8.35901 11.577 8.04701C11.577 5.82701 13.373 4.01901 15.605 4.01901C16.765 4.01901 17.812 4.50501 18.548 5.29101C19.458 5.11601 20.33 4.77901 21.104 4.31801C20.805 5.25301 20.168 6.03901 19.333 6.53801C20.144 6.45001 20.93 6.22601 21.652 5.91401C21.104 6.71201 20.419 7.42301 19.633 7.99701Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconTwitter',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'twitter'} {...props}>
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
