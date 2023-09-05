import {fail} from '@sveltejs/kit'

export const actions = {
    default: async({request}) => {
        const formData = await request.formData()
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        // do something with the data
        if(!name){
            return fail(400, {status: 'name is missing', email, message})
        }
        return {
            status: 'Form is submitted'
        }
    }
}