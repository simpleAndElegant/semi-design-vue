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
        d="M13.6214 5.03557C14.0119 5.42609 14.645 5.42609 15.0356 5.03557C15.4261 4.64505 15.4261 4.01188 15.0356 3.62136L12.7071 1.29289C12.3166 0.902369 11.6834 0.902369 11.2929 1.29289L8.96443 3.62136C8.57391 4.01188 8.57391 4.64505 8.96443 5.03557C9.35495 5.42609 9.98812 5.42609 10.3786 5.03557L10.9998 4.41436V10.9999H4.41406L5.03557 10.3783C5.42609 9.98782 5.42609 9.35465 5.03557 8.96413C4.64505 8.57361 4.01188 8.57361 3.62136 8.96413L1.29289 11.2926C0.902369 11.6831 0.902369 12.3163 1.29289 12.7068L3.62136 15.0353C4.01188 15.4258 4.64505 15.4258 5.03557 15.0353C5.42609 14.6447 5.42609 14.0116 5.03557 13.6211L4.41436 12.9999H10.9998V19.5861L10.3783 18.9646C9.98782 18.5741 9.35465 18.5741 8.96413 18.9646C8.57361 19.3551 8.57361 19.9883 8.96413 20.3788L11.2926 22.7073C11.6831 23.0978 12.3163 23.0978 12.7068 22.7073L15.0353 20.3788C15.4258 19.9883 15.4258 19.3551 15.0353 18.9646C14.6447 18.5741 14.0116 18.5741 13.6211 18.9646L12.9998 19.5858V12.9999H19.5851L18.9641 13.6209C18.5736 14.0114 18.5736 14.6446 18.9641 15.0351C19.3547 15.4256 19.9878 15.4256 20.3783 15.0351L22.7068 12.7066C23.0973 12.3161 23.0973 11.6829 22.7068 11.2924L20.3783 8.96394C19.9878 8.57342 19.3547 8.57342 18.9641 8.96394C18.5736 9.35447 18.5736 9.98763 18.9641 10.3782L19.5858 10.9999H12.9998V4.41406L13.6214 5.03557Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconAbsoluteStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'absolute_stroked'} {...props}>
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
