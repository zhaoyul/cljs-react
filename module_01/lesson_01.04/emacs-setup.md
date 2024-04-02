---
title: Emacs Setup
slug: getting-started-emacs-setup
description: Setup Emacs for Clojure development.
isPublicLesson: true
---

# Emacs Setup

Emacs is the most loved Clojure editor. One of the reasons behind this is its LISPy roots.

Depending on your setup, there are multiple ways to install these packages. This guide assumes that you have [straight.el](https://github.com/raxod502/straight.el) or [use-package](https://github.com/jwiegley/use-package) installed. If you'd like to install one, we recommend Straight.el, mainly because it lets you fetch packages directly from Github. You can check my personal [.emacs.d](https://github.com/shivekkhurana/.emacs.d) if you'd like to review my setup.

Once you have `use-package` in place (via Straight or use-package), we can install the required packages. You will need to add this configuration probably to `init.el` file. To get Clojure working with Emacs, we need the following packages:

- [flycheck](https://www.flycheck.org/en/latest/)
```elisp
(use-package flycheck
  :init (global-flycheck-mode))

;; First install the package, then install the checker as soon as `clojure-mode' is loaded
(use-package flycheck-clj-kondo)
```

- [clojure-mode](https://github.com/clojure-emacs/clojure-mode)
```elisp
(use-package clojure-mode
  :config
  (require 'flycheck-clj-kondo))
```

- [cider](https://github.com/clojure-emacs/cider)
```
(use-package cider
  :defer t
  :init
  (progn
    (add-hook 'clojure-mode-hook 'cider-mode)
    (add-hook 'clojurescript-mode-hook 'cider-mode)
    (add-hook 'clojurec-mode-hook 'cider-mode)
    (add-hook 'cider-repl-mode-hook 'cider-mode))
  :config
  (setq cider-repl-display-help-banner nil)
  (setq cider-auto-mode nil))
```

- [rainbow-delimeters](https://www.emacswiki.org/emacs/RainbowDelimiters)
```
(use-package rainbow-delimiters
  :defer t
  :init
  (add-hook 'prog-mode-hook 'rainbow-delimiters-mode))
```
- [paredit](https://www.emacswiki.org/emacs/ParEdit)
```
(use-package paredit
  :defer t
  :init
  (progn
    (add-hook 'emacs-lisp-mode-hook 'paredit-mode)
    (add-hook 'clojure-mode-hook 'paredit-mode)
    (add-hook 'clojurescript-mode-hook 'paredit-mode)
    (add-hook 'clojurec-mode-hook 'paredit-mode)
    (add-hook 'cider-repl-mode-hook 'paredit-mode)))
```
- [flycheck-clj-kondo](https://github.com/borkdude/flycheck-clj-kondo)
```
(use-package flycheck-clj-kondo)
```

## Keep tweaking
This setup is a good starting point. It's not a standard, in fact far from it. We suggest that you start with this and keep tweaking until it suits you. If you discover something that works well for you, let me know too!
