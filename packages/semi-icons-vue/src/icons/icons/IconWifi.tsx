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
        d="M12 6C8.73212 6 5.69288 7.6192 3.49813 9.61082C2.88464 10.1675 1.93601 10.1215 1.37931 9.50801C0.822597 8.89452 0.868626 7.94589 1.48211 7.38918C4.03353 5.0739 7.75945 3 12 3C16.2406 3 19.9664 5.07391 22.5178 7.38918C23.1313 7.94589 23.1773 8.89452 22.6206 9.50801C22.0639 10.1215 21.1153 10.1675 20.5018 9.61082C18.3071 7.61919 15.2679 6 12 6ZM14.5 18.5C14.5 19.8807 13.3807 21 12 21C10.6193 21 9.5 19.8807 9.5 18.5C9.5 17.1193 10.6193 16 12 16C13.3807 16 14.5 17.1193 14.5 18.5ZM6.98429 14.371C8.66791 12.907 10.2998 12.5 12 12.5C13.7003 12.5 15.3321 12.907 17.0158 14.371C17.6409 14.9146 18.5883 14.8485 19.1319 14.2234C19.6755 13.5983 19.6094 12.6508 18.9843 12.1072C16.6679 10.093 14.2998 9.5 12 9.5C9.70028 9.5 7.33214 10.093 5.01576 12.1072C4.39062 12.6508 4.32452 13.5983 4.86811 14.2234C5.41171 14.8485 6.35915 14.9146 6.98429 14.371Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconWifi',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'wifi'} {...props}>
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
