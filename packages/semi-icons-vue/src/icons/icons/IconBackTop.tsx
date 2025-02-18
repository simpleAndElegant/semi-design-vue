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
        d="M11.9393 22.9393C11.1109 22.9393 10.4393 22.2678 10.4393 21.4393L10.4393 10.0606L6.06066 14.4393C5.47487 15.0251 4.52513 15.0251 3.93934 14.4393C3.35355 13.8535 3.35355 12.9038 3.93934 12.318L10.8787 5.37867C11.4645 4.79288 12.4142 4.79289 13 5.37867L20.0607 12.4393C20.6465 13.0251 20.6465 13.9749 20.0607 14.5607C19.4749 15.1464 18.5251 15.1464 17.9393 14.5607L13.4393 10.0606L13.4393 21.4393C13.4393 22.2678 12.7678 22.9393 11.9393 22.9393Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4393 0.939332C19.2678 0.939332 19.9393 1.6109 19.9393 2.43933C19.9393 3.26776 19.2678 3.93933 18.4393 3.93933L5.43934 3.93933C4.61091 3.93933 3.93934 3.26776 3.93934 2.43933C3.93934 1.6109 4.61091 0.939331 5.43934 0.939331L18.4393 0.939332Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconBackTop',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'back_top'} {...props}>
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
