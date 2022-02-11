import { gql } from '@apollo/client'
export const getData = gql`query GetAllAdminUsers($input: adminUsers) {
  getAllAdminUsers(input: $input) {
    message
    status
    data {
      id
      user {
        userProfilePic
        userProfileName
      }
      email
      posts
      actionCount
      amplifyCount
      seenCount
      actionRatio
      amplifyRatio
      accountStatus
      onBoarded
      lastSeen
    }
  }
}
`
