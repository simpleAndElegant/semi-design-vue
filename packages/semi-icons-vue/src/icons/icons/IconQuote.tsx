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
        d="M9.93384 4.93299C10.1772 5.72487 9.73247 6.56408 8.94058 6.8074C7.18893 7.34564 5.73098 8.55277 4.86323 10.1298C5.22842 10.0449 5.60897 10 6 10C8.76142 10 11 12.2386 11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15V13.5C1 8.99847 3.9732 5.19532 8.05942 3.93973C8.85131 3.6964 9.69051 4.1411 9.93384 4.93299ZM21.9338 4.93299C22.1772 5.72487 21.7325 6.56408 20.9406 6.8074C19.1889 7.34564 17.731 8.55277 16.8632 10.1298C17.2284 10.0449 17.609 10 18 10C20.7614 10 23 12.2386 23 15C23 17.7614 20.7614 20 18 20C15.2386 20 13 17.7614 13 15V13.5C13 8.99847 15.9732 5.19532 20.0594 3.93973C20.8513 3.6964 21.6905 4.1411 21.9338 4.93299Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconQuote',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'quote'} {...props}>
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
