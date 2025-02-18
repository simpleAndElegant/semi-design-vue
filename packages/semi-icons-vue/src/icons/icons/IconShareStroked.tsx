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
        d="M14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.43298 19.433 9 17.5 9C16.5229 9 15.6393 8.59958 15.0043 7.95388L9.87308 11.0627C9.9558 11.361 10 11.6753 10 12C10 12.2917 9.96432 12.575 9.89709 12.8459L15.121 15.9328C15.7454 15.3539 16.5814 15 17.5 15C19.433 15 21 16.567 21 18.5C21 20.433 19.433 22 17.5 22C15.567 22 14 20.433 14 18.5C14 18.2084 14.0357 17.9251 14.1029 17.6542L8.87889 14.5673C8.25449 15.1461 7.41857 15.5 6.5 15.5C4.56702 15.5 3 13.933 3 12C3 10.067 4.56702 8.5 6.5 8.5C7.3845 8.5 8.19237 8.8281 8.80854 9.36924L14.0667 6.18351C14.0229 5.96245 14 5.7339 14 5.5ZM17.5 4C16.6716 4 16 4.67158 16 5.5C16 6.32841 16.6716 7 17.5 7C18.3284 7 19 6.32841 19 5.5C19 4.67158 18.3284 4 17.5 4ZM6.5 10.5C5.67158 10.5 5 11.1716 5 12C5 12.8284 5.67158 13.5 6.5 13.5C7.32841 13.5 8 12.8284 8 12C8 11.1716 7.32841 10.5 6.5 10.5ZM16 18.5C16 17.6716 16.6716 17 17.5 17C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20C16.6716 20 16 19.3284 16 18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconShareStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'share_stroked'} {...props}>
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
