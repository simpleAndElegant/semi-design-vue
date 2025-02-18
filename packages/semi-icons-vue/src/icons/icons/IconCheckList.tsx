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
      <g opacity={0.99}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.70711 2.29289C7.31658 1.90237 6.68342 1.90237 6.29289 2.29289L4 4.58579L2.70711 3.29289C2.31658 2.90237 1.68342 2.90237 1.29289 3.29289C0.902369 3.68342 0.902369 4.31658 1.29289 4.70711L3.29289 6.70711C3.68342 7.09763 4.31658 7.09763 4.70711 6.70711L7.70711 3.70711C8.09763 3.31658 8.09763 2.68342 7.70711 2.29289ZM10.5 3C9.67157 3 9 3.67157 9 4.5C9 5.32843 9.67157 6 10.5 6H20.5C21.3284 6 22 5.32843 22 4.5C22 3.67157 21.3284 3 20.5 3H10.5ZM9 11.5C9 10.6716 9.67157 10 10.5 10H20.5C21.3284 10 22 10.6716 22 11.5C22 12.3284 21.3284 13 20.5 13H10.5C9.67157 13 9 12.3284 9 11.5ZM9 18.5C9 17.6716 9.67157 17 10.5 17H20.5C21.3284 17 22 17.6716 22 18.5C22 19.3284 21.3284 20 20.5 20H10.5C9.67157 20 9 19.3284 9 18.5ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L1.29289 11.7071C0.902369 11.3166 0.902369 10.6834 1.29289 10.2929C1.68342 9.90237 2.31658 9.90237 2.70711 10.2929L4 11.5858L6.29289 9.29289ZM7.70711 16.2929C7.31658 15.9024 6.68342 15.9024 6.29289 16.2929L4 18.5858L2.70711 17.2929C2.31658 16.9024 1.68342 16.9024 1.29289 17.2929C0.902369 17.6834 0.902369 18.3166 1.29289 18.7071L3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L7.70711 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconCheckList',

  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'check_list'} {...props}>
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
