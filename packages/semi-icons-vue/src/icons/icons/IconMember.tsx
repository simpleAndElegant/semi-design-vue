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
        d="M0.829978 7.659C0.590978 6.892 1.50498 6.29 2.11498 6.813L3.96998 8.402C4.32328 8.70469 4.74214 8.92106 5.19346 9.03401C5.64478 9.14696 6.11618 9.15339 6.57041 9.05281C7.02464 8.95222 7.44925 8.74737 7.81069 8.45445C8.17213 8.16152 8.46049 7.78855 8.65298 7.365L11.091 2.003C11.446 1.221 12.556 1.221 12.911 2.003L15.349 7.365C15.5415 7.78855 15.8298 8.16152 16.1913 8.45445C16.5527 8.74737 16.9773 8.95222 17.4315 9.05281C17.8858 9.15339 18.3572 9.14696 18.8085 9.03401C19.2598 8.92106 19.6787 8.70469 20.032 8.402L21.886 6.813C22.496 6.29 23.41 6.893 23.17 7.659L19.44 19.597C19.3127 20.0041 19.0586 20.3598 18.7148 20.6122C18.371 20.8646 17.9555 21.0005 17.529 21H6.46998C6.04369 21 5.62856 20.8637 5.28515 20.6112C4.94174 20.3586 4.68801 20.0029 4.56098 19.596L0.830978 7.66L0.829978 7.659Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconMember',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'member'} {...props}>
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
