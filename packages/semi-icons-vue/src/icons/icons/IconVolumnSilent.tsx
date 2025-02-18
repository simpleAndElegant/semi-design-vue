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
        d="M11.4332 2.09871C11.7797 2.26523 12 2.6156 12 3.00001V21C12 21.3844 11.7797 21.7348 11.4332 21.9013C11.0867 22.0678 10.6755 22.021 10.3753 21.7809L4.64922 17H2C1.44772 17 1 16.5523 1 16V8.00001C1 7.44772 1.44772 7.00001 2 7.00001H4.64922L10.3753 2.21914C10.6755 1.979 11.0867 1.93219 11.4332 2.09871Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconVolumnSilent',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'volumn_silent'} {...props}>
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
