#include <iostream>
#include <regex>

std::string umActually(std::string phrase) {
    std::transform(phrase.begin(), phrase.end(), phrase.begin(), ::tolower);
    std::string finalPhrase;
    std::regex pattern("[^a-zA-Z]");

    for (int i = 0; i < phrase.length(); i++) {
        if (std::regex_match(phrase, pattern)) {
            finalPhrase += phrase[i];
        } else {
            if (i % 3 == 0) {
                finalPhrase += std::toupper(phrase[i]);
            } else {
                finalPhrase += phrase[i];
            }
        }
    }

    return finalPhrase;
}

int main() {
    std::cout << umActually("Inertia is a property of matter") << std::endl;
    return 0;
}
