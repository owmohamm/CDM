import { ArgumentValue, ICdmTraitDef, ResolvedTrait, ResolvedTraitSet, resolveOptions } from '../internal';

export class ResolvedTraitSetBuilder {
    public rts: ResolvedTraitSet;
    // resOpt: resolveOptions;

    public clear(): void {
        // let bodyCode = () =>
        {
            this.rts = undefined;
        }
        // return p.measure(bodyCode);
    }
    public mergeTraits(rtsNew: ResolvedTraitSet): void {
        // let bodyCode = () =>
        {
            if (rtsNew) {
                if (!this.rts) {
                    this.rts = new ResolvedTraitSet(rtsNew.resOpt);
                }
                this.rts = this.rts.mergeSet(rtsNew);
            }
        }
        // return p.measure(bodyCode);
    }
    public takeReference(rtsNew: ResolvedTraitSet): void {
        // let bodyCode = () =>
        {
            this.rts = rtsNew;
        }
        // return p.measure(bodyCode);
    }

    public ownOne(rt: ResolvedTrait, resOpt: resolveOptions): void {
        // let bodyCode = () =>
        {
            this.rts = new ResolvedTraitSet(resOpt);
            this.rts.merge(rt, false);
        }
        // return p.measure(bodyCode);
    }

    public setTraitParameterValue(resOpt: resolveOptions, toTrait: ICdmTraitDef, paramName: string, value: ArgumentValue): void {
        // let bodyCode = () =>
        {
            this.rts = this.rts.setTraitParameterValue(resOpt, toTrait, paramName, value);
        }
        // return p.measure(bodyCode);
    }
    public replaceTraitParameterValue(resOpt: resolveOptions, toTrait: string,
                                      paramName: string, valueWhen: ArgumentValue, valueNew: ArgumentValue): void {
        // let bodyCode = () =>
        {
            if (this.rts) {
                this.rts = this.rts.replaceTraitParameterValue(resOpt, toTrait, paramName, valueWhen, valueNew);
            }
        }
        // return p.measure(bodyCode);
    }
}
