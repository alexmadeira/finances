import _ from 'lodash'

const buildedClasses: IBuildedClasses = {}

export function Company(props?: ICompanyProps) {
  if (!props) {
    if (!buildedClasses.Company) {
      throw new ClassBuilderError({
        action: 'verifique se as propriedades informadas estão corretas',
        errorLocationCode:
          'BUILDERS:SELLER:CLASS_WITHOUT_MANDATORY_INITIALIZATION_PROPERTIES',
      })
    }

    const CompanyKey = Object.keys(buildedClasses.Company)[0]
    return buildedClasses.Company[CompanyKey]
  }

  if (
    _.keys(props).length === 1 &&
    buildedClasses.Company &&
    buildedClasses.Company[props.id]
  ) {
    return buildedClasses.Company[props.id]
  }

  buildedClasses.Company = {}

  buildedClasses.Company[props.id] = new CompanyClass(props)
  return buildedClasses.Company[props.id]
}
