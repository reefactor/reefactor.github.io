// Unified UI layout logic - encapsulates rendering functions
(function() {
    'use strict';

    // Create DOM element helper
    function createElement(tag, attributes, content) {
        const element = document.createElement(tag);

        if (attributes) {
            Object.keys(attributes).forEach(key => {
                if (key === 'className') {
                    element.className = attributes[key];
                } else if (key === 'style' && typeof attributes[key] === 'object') {
                    Object.assign(element.style, attributes[key]);
                } else {
                    element.setAttribute(key, attributes[key]);
                }
            });
        }

        if (content !== undefined) {
            if (typeof content === 'string') {
                element.innerHTML = content;
            } else if (Array.isArray(content)) {
                content.forEach(item => {
                    if (item instanceof Node) {
                        element.appendChild(item);
                    } else if (typeof item === 'string') {
                        element.appendChild(document.createTextNode(item));
                    }
                });
            } else if (content instanceof Node) {
                element.appendChild(content);
            }
        }

        return element;
    }

    // Render header section
    function renderHeader(container, headerData) {
        if (!headerData || !headerData.title) return;

        const br = createElement('br');
        const h3 = createElement('h3', null, headerData.title);
        const hr = createElement('hr');

        container.appendChild(br);
        container.appendChild(h3);
        container.appendChild(hr);
    }

    // Render subtitle
    function renderSubtitle(container, subtitle) {
        if (!subtitle) return;

        const h5 = createElement('h5', {
            className: 'row justify-content-md-center box text-muted'
        }, subtitle);

        container.appendChild(h5);
    }

    // Render card
    function renderCard(cardData) {
        const card = createElement('div', {
            className: 'card bg-light mb-3',
            style: { maxWidth: '21rem' }
        });

        const cardHeader = createElement('div', {
            className: 'card-header'
        }, cardData.header);

        const cardBody = createElement('div', {
            className: 'card-body text-secondary'
        });

        if (cardData.title) {
            const cardTitle = createElement('h5', {
                className: 'card-title'
            }, cardData.title);
            cardBody.appendChild(cardTitle);
        }

        if (cardData.text) {
            const cardText = createElement('p', {
                className: 'card-text'
            }, cardData.text);
            cardBody.appendChild(cardText);
        }

        if (cardData.items) {
            cardData.items.forEach(itemText => {
                const cardText = createElement('p', {
                    className: 'card-text'
                }, itemText);
                cardBody.appendChild(cardText);
            });
        }

        if (cardData.image) {
            const img = createElement('img', {
                src: cardData.image.src,
                alt: cardData.image.alt,
                style: cardData.image.style || {}
            });
            const cardText = createElement('p', {
                className: 'card-text'
            });
            cardText.appendChild(img);
            cardBody.appendChild(cardText);
        }

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        return card;
    }

    // Render cards section
    function renderCards(container, cardsData) {
        if (!cardsData || !Array.isArray(cardsData)) return;

        const row = createElement('div', {
            className: 'row justify-content-md-center'
        });

        const cardDeck = createElement('div', {
            className: 'card-deck'
        });

        cardsData.forEach(cardData => {
            const card = renderCard(cardData);
            cardDeck.appendChild(card);
        });

        row.appendChild(cardDeck);
        container.appendChild(row);
    }

    // Render section with items
    function renderSection(container, sectionData) {
        if (!sectionData) return;

        const hr = createElement('hr');
        container.appendChild(hr);

        if (sectionData.title) {
            const h5 = createElement('h5', {
                className: 'row justify-content-md-center box text-muted'
            }, sectionData.title);
            container.appendChild(h5);
        }

        if (sectionData.items && sectionData.items.length > 0) {
            const row = createElement('div', {
                className: 'row justify-content-md-center'
            });

            const col = createElement('div', {
                className: sectionData.colClass || 'col-md-20 justify-content-left'
            });

            const ul = createElement('ul');

            sectionData.items.forEach(itemText => {
                const li = createElement('li');
                const p = createElement('p', null, itemText);
                li.appendChild(p);
                ul.appendChild(li);
            });

            col.appendChild(ul);
            row.appendChild(col);
            container.appendChild(row);
        }

        if (sectionData.content) {
            const row = createElement('div', {
                className: sectionData.rowClass || 'row justify-content-md-center'
            });

            // If content already includes wrapper divs, don't wrap in another col
            if (sectionData.content.trim().startsWith('<div')) {
                row.innerHTML = sectionData.content;
            } else {
                const col = createElement('div', {
                    className: sectionData.colClass || 'col-md-8 justify-content-left'
                });
                col.innerHTML = sectionData.content;
                row.appendChild(col);
            }
            container.appendChild(row);
        }

        if (sectionData.iframes && sectionData.iframes.length > 0) {
            sectionData.iframes.forEach((iframeData, index) => {
                // Wrap each iframe in a block container to ensure one per line and center it
                const iframeWrapper = createElement('div', {
                    style: {
                        display: 'block',
                        marginBottom: '10px',
                        width: '100%',
                        textAlign: 'center'
                    }
                });

                const iframe = createElement('iframe', {
                    src: iframeData.src,
                    width: iframeData.width,
                    height: iframeData.height,
                    frameborder: '0',
                    marginwidth: '0',
                    marginheight: '0',
                    scrolling: 'no',
                    style: {
                        border: '1px solid #CCC',
                        borderWidth: '1px',
                        marginBottom: '5px',
                        maxWidth: '100%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    },
                    allowfullscreen: ''
                });

                iframeWrapper.appendChild(iframe);
                container.appendChild(iframeWrapper);
            });
        }
    }

    // Render passion section (special section with complex HTML)
    function renderPassionSection(container, passionData) {
        if (!passionData) return;

        const hr = createElement('hr');
        container.appendChild(hr);

        if (passionData.title) {
            const h5 = createElement('h5', {
                className: 'row justify-content-md-center box text-muted'
            }, passionData.title);
            container.appendChild(h5);
        }

        if (passionData.content) {
            const row = createElement('div', {
                className: 'row justify-content-md-center',
                id: 'content_wrapper'
            });
            row.innerHTML = passionData.content;
            container.appendChild(row);
        }

        startDemoscenePlayer()
    }

    // Render footer
    function renderFooter(container, footerData) {
        if (!footerData || !footerData.links) return;

        const hr = createElement('hr');
        container.appendChild(hr);

        const row = createElement('div', {
            className: 'row justify-content-md-center'
        });

        const containerFluid = createElement('div', {
            className: 'container-fluid'
        });

        const footer = createElement('footer');

        const footerDiv = createElement('div', {
            className: 'col-md-auto card-footer bg-secondary text-center'
        });

        footerData.links.forEach(linkData => {
            const link = createElement('a', {
                href: linkData.href,
                className: linkData.className
            });

            if (linkData.icon) {
                const icon = createElement('i', {
                    className: linkData.icon
                });
                link.appendChild(icon);
            }

            if (linkData.imgSrc) {
                const img = createElement('img', {
                    src: linkData.imgSrc
                });
                link.appendChild(img);
            }

            if (linkData.text) {
                link.appendChild(document.createTextNode(linkData.text));
            }

            footerDiv.appendChild(link);
        });

        footer.appendChild(footerDiv);
        containerFluid.appendChild(footer);
        row.appendChild(containerFluid);
        container.appendChild(row);
    }

    // Apply global theme styles
    function applyGlobalTheme() {
        if (typeof THEME !== 'undefined') {
            document.documentElement.style.backgroundColor = THEME.backgroundColor;
            document.documentElement.style.color = THEME.textColor;
            document.documentElement.style.fontFamily = THEME.fontFamily;

            document.body.style.backgroundColor = THEME.backgroundColor;
            document.body.style.color = THEME.textColor;
            document.body.style.fontFamily = THEME.fontFamily;
        }
    }

    // Main render function
    function renderContent() {
        // Apply global theme first
        applyGlobalTheme();
        // Render header
        const headerContainer = document.getElementById('header-section');
        if (headerContainer) {
            renderHeader(headerContainer, siteContent.header);
        }

        // Render subtitle
        const subtitleContainer = document.getElementById('subtitle-section');
        if (subtitleContainer && siteContent.header.subtitle) {
            renderSubtitle(subtitleContainer, siteContent.header.subtitle);
        }

        // Render cards
        const cardsContainer = document.getElementById('cards-section');
        if (cardsContainer && siteContent.cards) {
            renderCards(cardsContainer, siteContent.cards);
        }

        // Render all sections
        const sectionsContainer = document.getElementById('sections-container');
        if (sectionsContainer && siteContent.sections) {
            siteContent.sections.forEach(section => {
                if (section.id === 'passion') {
                    // Special handling for passion section
                    const passionContainer = document.getElementById('passion-section');
                    if (passionContainer) {
                        renderPassionSection(passionContainer, section);
                    }
                } else {
                    // Regular sections
                    renderSection(sectionsContainer, section);
                }
            });
        }

        // Render footer
        const footerContainer = document.getElementById('footer-section');
        if (footerContainer) {
            renderFooter(footerContainer, siteContent.footer);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderContent);
    } else {
        renderContent();
    }

    // Export functions for potential external use
    window.layoutRenderer = {
        renderHeader,
        renderSubtitle,
        renderCard,
        renderCards,
        renderSection,
        renderPassionSection,
        renderFooter,
        createElement
    };
})();

