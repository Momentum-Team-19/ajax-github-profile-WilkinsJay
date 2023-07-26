const profile = document.querySelector('#profile')
const reposDiv = document.querySelector('#repos')

fetch('https://api.github.com/users/WilkinsJay', {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
})

.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data)

    let pictureDiv = document.createElement('img')
    pictureDiv.src = data.avatar_url
    
    let nameDiv = document.createElement('div')
    nameDiv.innerText = data.name
    
    let locationDiv = document.createElement('p')
    locationDiv.innerText = `Location: ${data.location}`
    
    let urlDiv = document.createElement ('p')
    urlDiv.innerText = `GitHub URL: ${data.url}`

    let loginDiv = document.createElement('p')
    loginDiv.innerText = `GitHub username: ${data.login}`
    
    profile.append(pictureDiv, nameDiv, locationDiv, urlDiv, loginDiv)
})

fetch('https://api.github.com/users/WilkinsJay/repos', {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
})

.then((response) => {
    return response.json()
})

.then ((repos) => {
    console.log(repos)

    for (let repository of repos) {
        let repositoryDiv = document.createElement('a')
        repositoryDiv.href = repository.url
        repositoryDiv.innerText = repository.name
        reposDiv.append(repositoryDiv)
    }
})