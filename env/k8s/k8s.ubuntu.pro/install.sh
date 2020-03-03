apt-get install docker-compose jq default-jre;
curl -OL https://dl.google.com/go/go1.14.linux-amd64.tar.gz &&  tar -C /usr/local -xzf go1.14.linux-amd64.tar.gz && export PATH=$PATH:/usr/local/go/bin
git clone https://github.com/helm/helm.git && make &&  cp bin/ /usr/local/bin/


# curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash

# keytool 用于导入证书