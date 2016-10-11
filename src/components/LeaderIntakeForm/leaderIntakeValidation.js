import { createValidator, required, email } from '../../utils/validation'

export default createValidator({
  name: [required],
  email: [required, email],
  phone_number: [required],
  slack_username: [required],
  github_username: [required],
  address: [required]
})