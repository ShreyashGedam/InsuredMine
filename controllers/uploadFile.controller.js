const csv = require('csvtojson')
const AccountModel = require('../models/account.model')
const AgentModel = require('../models/agent.model')
const CarriertModel = require('../models/carrier.model')
const LobModel = require('../models/lob.model')
const PolicyModel = require('../models/policy.model')
const UserModel = require('../models/user.model')

const UploadFile = async (req, res) => {

    const file = req.file

    csv()
        .fromFile(file.path)
        .then((jsonObj) => {

            for (var i = 0; i < jsonObj.length; i++) {

                const data = jsonObj[i]
                console.log(data)

                const accounts = {
                    account_name: data.account_name,
                    account_type: data.account_type
                }

                const agents = {
                    agent: data.agent
                }

                const carriers = {
                    company_name: data.company_name
                }

                const lobs = {
                    category_name: data.category_name
                }

                const policies = {
                    policy_mode: data.policy_mode,
                    policy_number: data.policy_number,
                    policy_type: data.policy_type,
                    policy_start_date: data.policy_start_date,
                    policy_end_date: data.policy_end_date
                }

                const users = {
                    userType: data.userType,
                    producer: data.producer,
                    premium_amount_written: data.premium_amount_written,
                    premium_amount: data.premium_amount,
                    csr: data.csr,
                    email: data.email,
                    gender: data.gender,
                    firstname: data.firstname,
                    city: data.city,
                    phone: data.phone,
                    address: data.address,
                    state: data.state,
                    zip: data.zip,
                    dob: data.dob,
                }

                const account = new AccountModel({ ...accounts })
                account.save()

                const agent = new AgentModel({ ...agents })
                agent.save()

                const carrier = new CarriertModel({ ...carriers })
                carrier.save()

                const lob = new LobModel({ ...lobs })
                lob.save()

                const policie = new PolicyModel({ ...policies })
                policie.save()

                const user = new UserModel({ ...users })
                user.save()
            }
        })

    res.status(201).send({
        message: 'File uploaded successfully'
    })
}

module.exports = UploadFile