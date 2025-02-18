import {defineComponent, ref, h, CSSProperties, Ref, getCurrentInstance,} from 'vue'
import baseLog from '@douyinfe/semi-foundation/utils/log';
import {DefaultAdapter} from '@douyinfe/semi-foundation/base/foundation';
import {VALIDATE_STATUS} from '@douyinfe/semi-foundation/base/constants';
import {ArrayElement} from './base';
import type {ContextValue} from "../configProvider/context";
import {useConfigContext} from "../configProvider/context/Consumer";

const {hasOwnProperty} = Object.prototype;

export type ValidateStatus = ArrayElement<typeof VALIDATE_STATUS>;

export type BaseProps =  {
  style?: CSSProperties;
  className?: string;

  // [key: string]: any,
}

export function getProps (props:Record<string, any>) {
  let newProps:any = {}
  for(let i in props){
    if (props[i] !== undefined){
      newProps[i] = props[i]
    }
  }
  // console.log('value' in newProps)
  return  newProps
}
export const useBaseComponent: <U extends BaseProps = {}>(props: U,state:any) =>
  {
    isControlled: (key: any) => boolean,
    cache: any,
    adapter: <P extends BaseProps, S={}>() => DefaultAdapter<P, S>,
    log: (text: string, ...rest: any) => any,
    context: Ref<ContextValue>, foundation: any, state: any
  }= (props,state)=> {
  const cache = ref<any>({});
  const foundation = ref<any>(null);

  const isControlled = (key: any) => {

    return Boolean(key && props && typeof props === 'object' && hasOwnProperty.call(adapter().getProps(), key))
  };

  const { context } = useConfigContext()

  const currentInstance = getCurrentInstance()
  function adapter<P extends BaseProps = {}, S = {}>(): DefaultAdapter<P, S> {

    return {
      getContext: key => { // eslint-disable-line
        // @ts-ignore
        const contexts:Record<string, Ref> = currentInstance.provides
        let context_ = {...context.value}
        Object.keys(contexts).forEach(key=>{
          context_ = {...context_, ...contexts[key].value}
        })

        if (context_ && key) {
          // @ts-ignore
          return context_[key];
        }
      },
      getContexts: () => {
        // @ts-ignore
        const contexts:Record<string, Ref> = currentInstance.provides
        let context_ = {...context.value}
        Object.keys(contexts).forEach(key=>{
          context_ = {...context_, ...contexts[key].value}
        })

        return context_
      }, // eslint-disable-line
      getProp: key => {
        // //console.log(key,props,props[key])
        return props[key]
      }, // eslint-disable-line
      // return all props
      // @ts-ignore
      getProps: ()=>getProps(props), // eslint-disable-line
      getState: key => {
        //console.log(key,state,state[key])
        return state[key]
      }, // eslint-disable-line
      getStates: () => state, // eslint-disable-line
      setState: (states, cb) => {
        // console.log('setState', states)
        for (let i in states){
          if (states.hasOwnProperty(i)){
           state[i] = states[i]
          }
        }
        // this.setState({ ...states }, cb)
      }, // eslint-disable-line
      getCache: key => key && cache.value[key], // eslint-disable-line
      getCaches: () => cache.value, // eslint-disable-line
      setCache: (key, value) => key && (cache.value[key] = value), // eslint-disable-line
      stopPropagation: e => { // eslint-disable-line
        try {
          e.stopPropagation();
          e && e.stopImmediatePropagation && e.stopImmediatePropagation();
        } catch (error) {

        }
      },
      persistEvent: (e: KeyboardEvent | MouseEvent) => {
        // e && e.persist && typeof e.persist === 'function' ? e.persist() : null;
      }
    };
  }

  function log(text: string, ...rest: any): any {
    return baseLog(text, ...rest);
  }


  return {
    cache,
    foundation,
    state,
    isControlled,
    context,
    adapter,
    log,
  }


}
