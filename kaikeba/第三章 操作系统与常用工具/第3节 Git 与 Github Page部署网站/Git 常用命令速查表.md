# Git 常用命令速查表

**创建版本库**

```text
$ git clone <url>                  #克隆远程版本库
$ git init                         #初始化本地版本库
```

**修改和提交**

```text
$ git status                       #查看状态
$ git diff                         #查看变更内容
$ git add .                        #跟踪所有改动过的文件
$ git add <file>                   #跟踪指定的文件
$ git mv <old><new>                #文件改名
$ git rm<file>                     #删除文件
$ git rm --cached<file>            #停止跟踪文件但不删除
$ git commit -m "commit messages"  #提交所有更新过的文件
$ git commit --amend               #修改最后一次改动
```

**查看提交历史**

```text
$ git log                    #查看提交历史
$ git log -p <file>          #查看指定文件的提交历史
$ git blame <file>           #以列表方式查看指定文件的提交历史
```

**撤销**

```text
$ git reset --hard HEAD      #撤销工作目录中所有未提交文件的修改内容
$ git checkout HEAD <file>   #撤销指定的未提交文件的修改内容
$ git revert <commit>        #撤销指定的提交
$ git log --before="1 days"  #退回到之前1天的版本
```

**分支与标签**

```text
$ git branch                   #显示所有本地分支
$ git checkout <branch/tag>    #切换到指定分支和标签
$ git branch <new-branch>      #创建新分支
$ git checkout -b 分支名        #新建分支并切换到新分支
$ git push origin newbranch    #将新的分支推送到github 
$ git branch -d <branch>       #删除本地分支
$ git push <remote\> :<branch/tag-name\>  #删除远程分支或标签
$ git tag                      #列出所有本地标签
$ git tag <tagname>            #基于最新提交创建标签
$ git tag -d <tagname>         #删除标签
```

**合并与衍合**

```text
$ git merge <branch>        #合并指定分支到当前分支
$ git rebase <branch>       #衍合指定分支到当前分支
```

**远程操作**

```text
$ git remote -v                   #查看远程版本库信息
$ git remote rm origin            # 删除当前远程地址
$ git remote show <remote>        #查看指定远程版本库信息
$ git remote add <remote> <url>   #添加远程版本库
$ git fetch <remote>              #从远程库获取代码
$ git pull <remote> <branch>      #下载代码及快速合并gitgit 
$ git branch --set-upstream-to=origin/dev dev      
$ git push <remote> <branch>      #上传代码及快速合并
$ git push <remote\> :<branch/tag-name\>  #删除远程分支或标签
$ git push --tags                       #上传所有标签
如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to <branch-name> origin/<branch-name>。

在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

git push origin master 实际上是 git push origin master:master(远程的master) 
git fetch origin 远程分支:本地分支
```

更多内容请查看 [Git 文档](https://git-scm.com/book/zh/v2)。





注意  bug 的流程！

diff 