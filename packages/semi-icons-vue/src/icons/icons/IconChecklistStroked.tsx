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
        d="M7.70711 2.79289C8.09763 3.18342 8.09763 3.81658 7.70711 4.20711L4.70711 7.20711C4.31658 7.59763 3.68342 7.59763 3.29289 7.20711L1.79289 5.70711C1.40237 5.31658 1.40237 4.68342 1.79289 4.29289C2.18342 3.90237 2.81658 3.90237 3.20711 4.29289L4 5.08579L6.29289 2.79289C6.68342 2.40237 7.31658 2.40237 7.70711 2.79289Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.70711 9.79289C8.09763 10.1834 8.09763 10.8166 7.70711 11.2071L4.70711 14.2071C4.31658 14.5976 3.68342 14.5976 3.29289 14.2071L1.79289 12.7071C1.40237 12.3166 1.40237 11.6834 1.79289 11.2929C2.18342 10.9024 2.81658 10.9024 3.20711 11.2929L4 12.0858L6.29289 9.79289C6.68342 9.40237 7.31658 9.40237 7.70711 9.79289Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.70711 16.7929C8.09763 17.1834 8.09763 17.8166 7.70711 18.2071L4.70711 21.2071C4.31658 21.5976 3.68342 21.5976 3.29289 21.2071L1.79289 19.7071C1.40237 19.3166 1.40237 18.6834 1.79289 18.2929C2.18342 17.9024 2.81658 17.9024 3.20711 18.2929L4 19.0858L6.29289 16.7929C6.68342 16.4024 7.31658 16.4024 7.70711 16.7929Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 12C9.5 11.4477 9.94772 11 10.5 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H10.5C9.94772 13 9.5 12.5523 9.5 12Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 19C9.5 18.4477 9.94772 18 10.5 18H21.5C22.0523 18 22.5 18.4477 22.5 19C22.5 19.5523 22.0523 20 21.5 20H10.5C9.94772 20 9.5 19.5523 9.5 19Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 5C9.5 4.44772 9.94772 4 10.5 4H21.5C22.0523 4 22.5 4.44772 22.5 5C22.5 5.55228 22.0523 6 21.5 6H10.5C9.94772 6 9.5 5.55228 9.5 5Z"
        fill="currentColor"
      />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconChecklistStroked',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'checklist_stroked'} {...props}>
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
